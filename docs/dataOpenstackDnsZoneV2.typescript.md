# `dataOpenstackDnsZoneV2` Submodule <a name="`dataOpenstackDnsZoneV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackDnsZoneV2 <a name="DataOpenstackDnsZoneV2" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2 openstack_dns_zone_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer"></a>

```typescript
import { dataOpenstackDnsZoneV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2(scope: Construct, id: string, config?: DataOpenstackDnsZoneV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config">DataOpenstackDnsZoneV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config">DataOpenstackDnsZoneV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAllProjects">resetAllProjects</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetMasters">resetMasters</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetSerial">resetSerial</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTransferredAt">resetTransferredAt</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllProjects` <a name="resetAllProjects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAllProjects"></a>

```typescript
public resetAllProjects(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmail` <a name="resetEmail" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMasters` <a name="resetMasters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetMasters"></a>

```typescript
public resetMasters(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPoolId` <a name="resetPoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetPoolId"></a>

```typescript
public resetPoolId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSerial` <a name="resetSerial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetSerial"></a>

```typescript
public resetSerial(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTransferredAt` <a name="resetTransferredAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTransferredAt"></a>

```typescript
public resetTransferredAt(): void
```

##### `resetTtl` <a name="resetTtl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetVersion` <a name="resetVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackDnsZoneV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct"></a>

```typescript
import { dataOpenstackDnsZoneV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement"></a>

```typescript
import { dataOpenstackDnsZoneV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackDnsZoneV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackDnsZoneV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackDnsZoneV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackDnsZoneV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackDnsZoneV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackDnsZoneV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjectsInput">allProjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.mastersInput">mastersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serialInput">serialInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAtInput">transferredAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAtInput">updatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjects">allProjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.masters">masters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serial">serial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAt">transferredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allProjectsInput`<sup>Optional</sup> <a name="allProjectsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjectsInput"></a>

```typescript
public readonly allProjectsInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mastersInput`<sup>Optional</sup> <a name="mastersInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.mastersInput"></a>

```typescript
public readonly mastersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serialInput`<sup>Optional</sup> <a name="serialInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serialInput"></a>

```typescript
public readonly serialInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `transferredAtInput`<sup>Optional</sup> <a name="transferredAtInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAtInput"></a>

```typescript
public readonly transferredAtInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `allProjects`<sup>Required</sup> <a name="allProjects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjects"></a>

```typescript
public readonly allProjects: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `masters`<sup>Required</sup> <a name="masters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.masters"></a>

```typescript
public readonly masters: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serial`<sup>Required</sup> <a name="serial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serial"></a>

```typescript
public readonly serial: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `transferredAt`<sup>Required</sup> <a name="transferredAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAt"></a>

```typescript
public readonly transferredAt: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackDnsZoneV2Config <a name="DataOpenstackDnsZoneV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.Initializer"></a>

```typescript
import { dataOpenstackDnsZoneV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackDnsZoneV2Config: dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.allProjects">allProjects</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#all_projects DataOpenstackDnsZoneV2#all_projects}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#attributes DataOpenstackDnsZoneV2#attributes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.createdAt">createdAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#created_at DataOpenstackDnsZoneV2#created_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#description DataOpenstackDnsZoneV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#email DataOpenstackDnsZoneV2#email}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#id DataOpenstackDnsZoneV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.masters">masters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#masters DataOpenstackDnsZoneV2#masters}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#name DataOpenstackDnsZoneV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.poolId">poolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#pool_id DataOpenstackDnsZoneV2#pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#project_id DataOpenstackDnsZoneV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#region DataOpenstackDnsZoneV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.serial">serial</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#serial DataOpenstackDnsZoneV2#serial}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#status DataOpenstackDnsZoneV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.transferredAt">transferredAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#transferred_at DataOpenstackDnsZoneV2#transferred_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#ttl DataOpenstackDnsZoneV2#ttl}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#type DataOpenstackDnsZoneV2#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.updatedAt">updatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#updated_at DataOpenstackDnsZoneV2#updated_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#version DataOpenstackDnsZoneV2#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allProjects`<sup>Optional</sup> <a name="allProjects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.allProjects"></a>

```typescript
public readonly allProjects: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#all_projects DataOpenstackDnsZoneV2#all_projects}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#attributes DataOpenstackDnsZoneV2#attributes}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#created_at DataOpenstackDnsZoneV2#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#description DataOpenstackDnsZoneV2#description}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#email DataOpenstackDnsZoneV2#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#id DataOpenstackDnsZoneV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masters`<sup>Optional</sup> <a name="masters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.masters"></a>

```typescript
public readonly masters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#masters DataOpenstackDnsZoneV2#masters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#name DataOpenstackDnsZoneV2#name}.

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#pool_id DataOpenstackDnsZoneV2#pool_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#project_id DataOpenstackDnsZoneV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#region DataOpenstackDnsZoneV2#region}.

---

##### `serial`<sup>Optional</sup> <a name="serial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.serial"></a>

```typescript
public readonly serial: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#serial DataOpenstackDnsZoneV2#serial}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#status DataOpenstackDnsZoneV2#status}.

---

##### `transferredAt`<sup>Optional</sup> <a name="transferredAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.transferredAt"></a>

```typescript
public readonly transferredAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#transferred_at DataOpenstackDnsZoneV2#transferred_at}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#ttl DataOpenstackDnsZoneV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#type DataOpenstackDnsZoneV2#type}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#updated_at DataOpenstackDnsZoneV2#updated_at}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#version DataOpenstackDnsZoneV2#version}.

---



