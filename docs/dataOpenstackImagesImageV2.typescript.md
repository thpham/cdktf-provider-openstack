# `dataOpenstackImagesImageV2` Submodule <a name="`dataOpenstackImagesImageV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackImagesImageV2 <a name="DataOpenstackImagesImageV2" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2 openstack_images_image_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer"></a>

```typescript
import { dataOpenstackImagesImageV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackImagesImageV2.DataOpenstackImagesImageV2(scope: Construct, id: string, config?: DataOpenstackImagesImageV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config">DataOpenstackImagesImageV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config">DataOpenstackImagesImageV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetMemberStatus">resetMemberStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSizeMax">resetSizeMax</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSizeMin">resetSizeMin</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSortDirection">resetSortDirection</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSortKey">resetSortKey</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHidden` <a name="resetHidden" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetHidden"></a>

```typescript
public resetHidden(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberStatus` <a name="resetMemberStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetMemberStatus"></a>

```typescript
public resetMemberStatus(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetOwner` <a name="resetOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProperties` <a name="resetProperties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSizeMax` <a name="resetSizeMax" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSizeMax"></a>

```typescript
public resetSizeMax(): void
```

##### `resetSizeMin` <a name="resetSizeMin" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSizeMin"></a>

```typescript
public resetSizeMin(): void
```

##### `resetSortDirection` <a name="resetSortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSortDirection"></a>

```typescript
public resetSortDirection(): void
```

##### `resetSortKey` <a name="resetSortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetSortKey"></a>

```typescript
public resetSortKey(): void
```

##### `resetTag` <a name="resetTag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackImagesImageV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isConstruct"></a>

```typescript
import { dataOpenstackImagesImageV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformElement"></a>

```typescript
import { dataOpenstackImagesImageV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackImagesImageV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackImagesImageV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackImagesImageV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackImagesImageV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackImagesImageV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackImagesImageV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.containerFormat">containerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.diskFormat">diskFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.minDiskGb">minDiskGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.minRamMb">minRamMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.hiddenInput">hiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.memberStatusInput">memberStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMaxInput">sizeMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMinInput">sizeMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortDirectionInput">sortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortKeyInput">sortKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.memberStatus">memberStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMax">sizeMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMin">sizeMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortDirection">sortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortKey">sortKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `containerFormat`<sup>Required</sup> <a name="containerFormat" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.containerFormat"></a>

```typescript
public readonly containerFormat: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `diskFormat`<sup>Required</sup> <a name="diskFormat" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.diskFormat"></a>

```typescript
public readonly diskFormat: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `minDiskGb`<sup>Required</sup> <a name="minDiskGb" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.minDiskGb"></a>

```typescript
public readonly minDiskGb: number;
```

- *Type:* number

---

##### `minRamMb`<sup>Required</sup> <a name="minRamMb" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.minRamMb"></a>

```typescript
public readonly minRamMb: number;
```

- *Type:* number

---

##### `protected`<sup>Required</sup> <a name="protected" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.protected"></a>

```typescript
public readonly protected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.hiddenInput"></a>

```typescript
public readonly hiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberStatusInput`<sup>Optional</sup> <a name="memberStatusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.memberStatusInput"></a>

```typescript
public readonly memberStatusInput: string;
```

- *Type:* string

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeMaxInput`<sup>Optional</sup> <a name="sizeMaxInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMaxInput"></a>

```typescript
public readonly sizeMaxInput: number;
```

- *Type:* number

---

##### `sizeMinInput`<sup>Optional</sup> <a name="sizeMinInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMinInput"></a>

```typescript
public readonly sizeMinInput: number;
```

- *Type:* number

---

##### `sortDirectionInput`<sup>Optional</sup> <a name="sortDirectionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortDirectionInput"></a>

```typescript
public readonly sortDirectionInput: string;
```

- *Type:* string

---

##### `sortKeyInput`<sup>Optional</sup> <a name="sortKeyInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortKeyInput"></a>

```typescript
public readonly sortKeyInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberStatus`<sup>Required</sup> <a name="memberStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.memberStatus"></a>

```typescript
public readonly memberStatus: string;
```

- *Type:* string

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sizeMax`<sup>Required</sup> <a name="sizeMax" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMax"></a>

```typescript
public readonly sizeMax: number;
```

- *Type:* number

---

##### `sizeMin`<sup>Required</sup> <a name="sizeMin" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sizeMin"></a>

```typescript
public readonly sizeMin: number;
```

- *Type:* number

---

##### `sortDirection`<sup>Required</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackImagesImageV2Config <a name="DataOpenstackImagesImageV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.Initializer"></a>

```typescript
import { dataOpenstackImagesImageV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackImagesImageV2Config: dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#hidden DataOpenstackImagesImageV2#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#id DataOpenstackImagesImageV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.memberStatus">memberStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#member_status DataOpenstackImagesImageV2#member_status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#most_recent DataOpenstackImagesImageV2#most_recent}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#name DataOpenstackImagesImageV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.nameRegex">nameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#name_regex DataOpenstackImagesImageV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#owner DataOpenstackImagesImageV2#owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#properties DataOpenstackImagesImageV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#region DataOpenstackImagesImageV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sizeMax">sizeMax</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#size_max DataOpenstackImagesImageV2#size_max}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sizeMin">sizeMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#size_min DataOpenstackImagesImageV2#size_min}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sortDirection">sortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#sort_direction DataOpenstackImagesImageV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sortKey">sortKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#sort_key DataOpenstackImagesImageV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#tag DataOpenstackImagesImageV2#tag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#tags DataOpenstackImagesImageV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.visibility">visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#visibility DataOpenstackImagesImageV2#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#hidden DataOpenstackImagesImageV2#hidden}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#id DataOpenstackImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberStatus`<sup>Optional</sup> <a name="memberStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.memberStatus"></a>

```typescript
public readonly memberStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#member_status DataOpenstackImagesImageV2#member_status}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#most_recent DataOpenstackImagesImageV2#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#name DataOpenstackImagesImageV2#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#name_regex DataOpenstackImagesImageV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#owner DataOpenstackImagesImageV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#properties DataOpenstackImagesImageV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#region DataOpenstackImagesImageV2#region}.

---

##### `sizeMax`<sup>Optional</sup> <a name="sizeMax" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sizeMax"></a>

```typescript
public readonly sizeMax: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#size_max DataOpenstackImagesImageV2#size_max}.

---

##### `sizeMin`<sup>Optional</sup> <a name="sizeMin" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sizeMin"></a>

```typescript
public readonly sizeMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#size_min DataOpenstackImagesImageV2#size_min}.

---

##### `sortDirection`<sup>Optional</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#sort_direction DataOpenstackImagesImageV2#sort_direction}.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#sort_key DataOpenstackImagesImageV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#tag DataOpenstackImagesImageV2#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#tags DataOpenstackImagesImageV2#tags}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageV2.DataOpenstackImagesImageV2Config.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_v2#visibility DataOpenstackImagesImageV2#visibility}.

---



