# `dataOpenstackImagesImageIdsV2` Submodule <a name="`dataOpenstackImagesImageIdsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackImagesImageIdsV2 <a name="DataOpenstackImagesImageIdsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2 openstack_images_image_ids_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer"></a>

```typescript
import { dataOpenstackImagesImageIdsV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2(scope: Construct, id: string, config?: DataOpenstackImagesImageIdsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config">DataOpenstackImagesImageIdsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config">DataOpenstackImagesImageIdsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetMemberStatus">resetMemberStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMax">resetSizeMax</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMin">resetSizeMin</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortDirection">resetSortDirection</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortKey">resetSortKey</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberStatus` <a name="resetMemberStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetMemberStatus"></a>

```typescript
public resetMemberStatus(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetOwner` <a name="resetOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProperties` <a name="resetProperties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSizeMax` <a name="resetSizeMax" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMax"></a>

```typescript
public resetSizeMax(): void
```

##### `resetSizeMin` <a name="resetSizeMin" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMin"></a>

```typescript
public resetSizeMin(): void
```

##### `resetSort` <a name="resetSort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSort"></a>

```typescript
public resetSort(): void
```

##### `resetSortDirection` <a name="resetSortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortDirection"></a>

```typescript
public resetSortDirection(): void
```

##### `resetSortKey` <a name="resetSortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortKey"></a>

```typescript
public resetSortKey(): void
```

##### `resetTag` <a name="resetTag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackImagesImageIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct"></a>

```typescript
import { dataOpenstackImagesImageIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement"></a>

```typescript
import { dataOpenstackImagesImageIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackImagesImageIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackImagesImageIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackImagesImageIdsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackImagesImageIdsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackImagesImageIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackImagesImageIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatusInput">memberStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMaxInput">sizeMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMinInput">sizeMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirectionInput">sortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortInput">sortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKeyInput">sortKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatus">memberStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMax">sizeMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMin">sizeMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sort">sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirection">sortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKey">sortKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberStatusInput`<sup>Optional</sup> <a name="memberStatusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatusInput"></a>

```typescript
public readonly memberStatusInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeMaxInput`<sup>Optional</sup> <a name="sizeMaxInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMaxInput"></a>

```typescript
public readonly sizeMaxInput: number;
```

- *Type:* number

---

##### `sizeMinInput`<sup>Optional</sup> <a name="sizeMinInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMinInput"></a>

```typescript
public readonly sizeMinInput: number;
```

- *Type:* number

---

##### `sortDirectionInput`<sup>Optional</sup> <a name="sortDirectionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirectionInput"></a>

```typescript
public readonly sortDirectionInput: string;
```

- *Type:* string

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortInput"></a>

```typescript
public readonly sortInput: string;
```

- *Type:* string

---

##### `sortKeyInput`<sup>Optional</sup> <a name="sortKeyInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKeyInput"></a>

```typescript
public readonly sortKeyInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberStatus`<sup>Required</sup> <a name="memberStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatus"></a>

```typescript
public readonly memberStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sizeMax`<sup>Required</sup> <a name="sizeMax" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMax"></a>

```typescript
public readonly sizeMax: number;
```

- *Type:* number

---

##### `sizeMin`<sup>Required</sup> <a name="sizeMin" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMin"></a>

```typescript
public readonly sizeMin: number;
```

- *Type:* number

---

##### `sort`<sup>Required</sup> <a name="sort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

---

##### `sortDirection`<sup>Required</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackImagesImageIdsV2Config <a name="DataOpenstackImagesImageIdsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.Initializer"></a>

```typescript
import { dataOpenstackImagesImageIdsV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackImagesImageIdsV2Config: dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#id DataOpenstackImagesImageIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.memberStatus">memberStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#member_status DataOpenstackImagesImageIdsV2#member_status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name DataOpenstackImagesImageIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.nameRegex">nameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name_regex DataOpenstackImagesImageIdsV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#owner DataOpenstackImagesImageIdsV2#owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#properties DataOpenstackImagesImageIdsV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#region DataOpenstackImagesImageIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMax">sizeMax</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_max DataOpenstackImagesImageIdsV2#size_max}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMin">sizeMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_min DataOpenstackImagesImageIdsV2#size_min}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sort">sort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort DataOpenstackImagesImageIdsV2#sort}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortDirection">sortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_direction DataOpenstackImagesImageIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortKey">sortKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_key DataOpenstackImagesImageIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tag DataOpenstackImagesImageIdsV2#tag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tags DataOpenstackImagesImageIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.visibility">visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#visibility DataOpenstackImagesImageIdsV2#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#id DataOpenstackImagesImageIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberStatus`<sup>Optional</sup> <a name="memberStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.memberStatus"></a>

```typescript
public readonly memberStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#member_status DataOpenstackImagesImageIdsV2#member_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name DataOpenstackImagesImageIdsV2#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name_regex DataOpenstackImagesImageIdsV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#owner DataOpenstackImagesImageIdsV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#properties DataOpenstackImagesImageIdsV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#region DataOpenstackImagesImageIdsV2#region}.

---

##### `sizeMax`<sup>Optional</sup> <a name="sizeMax" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMax"></a>

```typescript
public readonly sizeMax: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_max DataOpenstackImagesImageIdsV2#size_max}.

---

##### `sizeMin`<sup>Optional</sup> <a name="sizeMin" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMin"></a>

```typescript
public readonly sizeMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_min DataOpenstackImagesImageIdsV2#size_min}.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort DataOpenstackImagesImageIdsV2#sort}.

---

##### `sortDirection`<sup>Optional</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_direction DataOpenstackImagesImageIdsV2#sort_direction}.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_key DataOpenstackImagesImageIdsV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tag DataOpenstackImagesImageIdsV2#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tags DataOpenstackImagesImageIdsV2#tags}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#visibility DataOpenstackImagesImageIdsV2#visibility}.

---



